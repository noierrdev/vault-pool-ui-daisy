// Next, React
import { FC, useEffect, useState } from 'react';
import { useConnection } from '@solana/wallet-adapter-react';

import VaultImpl, { KEEPER_URL } from '@mercurial-finance/vault-sdk';

import VaultRow from './VaultRow';
import { StrategyType, VaultInfo } from 'types';
import { useNetworkConfiguration } from 'contexts/NetworkConfigurationProvider';
import { Cluster } from '@solana/web3.js';
import { tokenMap,newTokenMap } from '../../constants';
import TokenRow from './TokenRow';
import VaultsHeader from '../../components/VaultsHeader'

export const HomeView: FC = ({ }) => {
  const { connection } = useConnection();
  const { networkConfiguration } = useNetworkConfiguration();
  const URL = KEEPER_URL[networkConfiguration];

  const [availableVaults, setAvailableVaults] = useState<{ vaultImpl: VaultImpl, vaultInfo: VaultInfo }[]>([]);
  const [availableTokens,setAvailableTokens]=useState<{ vaultImpl: VaultImpl}[]>([]);

  useEffect(() => {
    
    const init = async () => {
      var vaultsInfoResponse;
      var vaultsInfo=[];
      try{
        vaultsInfoResponse = await fetch(`${URL}/vault_info`);
        vaultsInfo = await vaultsInfoResponse.json() as VaultInfo[];
      }catch(e){

      }
      
      // const vaultsInfoResponse = await fetch(`https://app.meteora.ag/vault/vault_info`)
      

      const vaultsToInit = vaultsInfo
        .map(async (vault) => {
          const tokenInfo = tokenMap.find(token => token.address === vault.token_address);
          if (!tokenInfo) return null;
          if(vault.strategies.length==0) return null;

          return {
            vaultInfo: vault,
            vaultImpl: await VaultImpl.create(
              connection,
              tokenInfo,
              {
                cluster: networkConfiguration as Cluster,
              },
            ),
          }
        });


      Promise.all(vaultsToInit).then((availableVaults) => setAvailableVaults(availableVaults.filter(Boolean)));
      // Promise.all(vaultsToAdd).then((availableVaults) => setAvailableVaults(availableVaults.filter(Boolean)));
    }
    const tokenInit=async ()=>{
      const tokensToInit=newTokenMap.map(async tokenInfo=>{
        return {
          vaultImpl: await VaultImpl.create(
            connection,
            tokenInfo,
            {
              cluster: networkConfiguration as Cluster,
            },
          ),
        }
      });
      console.log(tokensToInit)
      Promise.all(tokensToInit).then((availableTokens) => setAvailableTokens(availableTokens.filter(Boolean)));
    }

    if (tokenMap.length === 0) return;
    init();
    tokenInit();
  }, [tokenMap,newTokenMap, connection, networkConfiguration])
  // useEffect(()=>{
  //   if(availableVaults){
  //     console.log(availableVaults)
  //   }
  // },[availableVaults])
  useEffect(()=>{
    if(availableTokens){
      console.log(availableTokens)
    }
  },[availableTokens])
  return (
    <div className='flex items-center justify-center flex-col my-8'>
      <VaultsHeader/>
      {availableVaults.map(vault => <VaultRow key={vault.vaultInfo.token_address} vaultImpl={vault.vaultImpl} vaultInfo={vault.vaultInfo} />)}
      {availableTokens.length>0&&newTokenMap.map( (tokenInfo,index)=>{
        console.log(availableTokens[index])
        return (
          <TokenRow key={index} vaultImpl={availableTokens[index].vaultImpl} tokenInfo={tokenInfo} />
        )
      })}
    </div>
  );
};
