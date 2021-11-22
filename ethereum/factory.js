import web3 from './web3'
import compiledFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    compiledFactory.abi ,
    '0xE652996C5F2Bf297AA66A07B44dD81Cbf7fa42Cd'
)

export default instance;

