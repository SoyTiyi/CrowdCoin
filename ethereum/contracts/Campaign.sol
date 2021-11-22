pragma solidity ^0.6.5;

contract Campaign{
    
    struct Request {
        string description;
        uint value;
        address recipient; // Ventor address
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount; 
        // others arguments to implement the voting
        // mechanism!
    }
    
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers; // Have to be public 'cause withput it we can not have access to outside
    mapping(uint => Request) public requests;
    uint private requestsCount;
    uint private approversCount;
    
    constructor(address _manager, uint _minimumContribution) public {
        manager = _manager;
        minimumContribution = _minimumContribution;
    }
    
    modifier onlyManager(){
        require(msg.sender == manager);
        _;
    }
    
    function contribute() public payable{
        require(msg.value >= minimumContribution);
		if(!approvers[msg.sender]){
			approversCount++;
		}
        approvers[msg.sender] = true;
    }
    
    function createRequest(string memory _description, uint _value, address _recipient) public onlyManager{
        // I do that 'cause with the new versions the are a problem to initialice de mapping parameter if it is in a Array
        Request storage newRequest = requests[requestsCount];
        newRequest.description = _description;
        newRequest.value = _value;
        newRequest.recipient = _recipient;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
        requestsCount++;
    }
    
    function approveRequest(uint index) public {
        require(approvers[msg.sender]);
        Request storage selectedRequest = requests[index]; // ask if have to be a storage or memory
        require(!selectedRequest.approvals[msg.sender]);
        selectedRequest.approvalCount++;
        selectedRequest.approvals[msg.sender] = true;
    }
    
    function finalizeRequest(uint index) public payable onlyManager{
        Request storage selectedRequest = requests[index];
        require(selectedRequest.approvalCount > (approversCount / 2));
        require(!selectedRequest.complete);
        selectedRequest.complete = true;
        payable(selectedRequest.recipient).transfer(selectedRequest.value);
    }

    function getSummary() public view returns(uint, uint, uint, uint, address) {
        return(
            address(this).balance,
            minimumContribution,
            requestsCount,
            approversCount,
            manager
        );
    }

    function getRequestCount() public view returns(uint){
        return requestsCount;
    }

    function getApproversCount() public view returns(uint){
        return approversCount;
    }
}


contract CampaignFactory{
    address[] public deployedCampaign;
    
    function createCampaign(uint minimumContribution) public{
        address newCampaign = address(new Campaign(msg.sender ,minimumContribution));
        deployedCampaign.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address[] memory) {
        return deployedCampaign;
    }
}