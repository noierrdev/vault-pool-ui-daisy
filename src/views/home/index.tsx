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
    <>
    <div className="w-full z-[-10] relative bg-[#151B32] overflow-hidden transition-all h-60 lg:h-72 h-[326px] lg:h-[352px]">
      <div className="relative mx-auto max-w-[90vw] xl:max-w-7xl w-full h-full">
          <div className="absolute flex items-center justify-center left-0 -top-72 h-[750px] w-[750px] bg-[#FE4476]/20 blur-[166px] safari-blur"></div>
          <div className="absolute flex items-center justify-center left-1/2 -translate-x-1/4 -top-60 h-[750px] w-[750px] bg-[#FF852C]/20 blur-[200px] safari-blur"></div>
          <div style={{animationDelay:"5s"}} className="h-[400px] w-[400px] left-0 -top-[250px] bg-[#EC2737] lg:animate-expand blur-sm safari-blur rounded-full opacity-0"></div>
          <div className="absolute h-[800px] w-[800px] left-1/2 top-[70px] bg-[#FF6F57] lg:animate-expand blur-sm safari-blur rounded-full opacity-0"></div>
      </div>
    </div>
    <div className='flex items-center justify-center flex-col my-8 '>
      <VaultsHeader/>
      {availableVaults.map(vault => <VaultRow key={vault.vaultInfo.token_address} vaultImpl={vault.vaultImpl} vaultInfo={vault.vaultInfo} />)}
      {availableTokens.length>0&&newTokenMap.map( (tokenInfo,index)=>{
        console.log(availableTokens[index])
        return (
          <TokenRow key={index} vaultImpl={availableTokens[index].vaultImpl} tokenInfo={tokenInfo} />
        )
      })}
    </div>
    </>
  );
};
