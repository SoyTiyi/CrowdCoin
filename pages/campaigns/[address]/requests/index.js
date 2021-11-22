import React, { useEffect, useState } from 'react'
import Layout from '../../../../components/Layout'
import { Button, Table } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import Campaign from '../../../../ethereum/campaign'
import web3 from '../../../../ethereum/web3'

const index = ({ address, requestCount, approversCount, requests }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const approveRequest = async (index) => {
    setLoading(true)
    const campaign = Campaign(address)
    const accounts = await web3.eth.getAccounts()
    await campaign.methods.approveRequest(index).send({
      from: accounts[0],
    })
    setLoading(false)
    router.push(`/campaigns/${address}/requests`)
  }

  const finalizeRequest = async (index) => {
    setLoading(true)
    const campaign = Campaign(address)
    const accounts = await web3.eth.getAccounts()
    await campaign.methods.finalizeRequest(index).send({
      from: accounts[0],
    })
    setLoading(false)
    router.push(`/campaigns/${address}/requests`)
  }

  const renderRequests = () => {
    const items = requests.map((request, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{request.description}</Table.Cell>
          <Table.Cell>{web3.utils.fromWei(request.value, 'ether')}</Table.Cell>
          <Table.Cell>{request.recipient}</Table.Cell>
          <Table.Cell>
            {request.approvalCount} / {approversCount}
          </Table.Cell>
          <Table.Cell>{request.complete ? 'COMPLETE' : 'INCOMPLETE'}</Table.Cell>
          <Table.Cell>
            <Button
              color="green"
              loading={loading}
              basic
              disabled={request.complete}
              onClick={() => approveRequest(index)}
            >
              Approve
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button
              color="red"
              loading={loading}
              basic
              disabled={request.complete}
              onClick={() => finalizeRequest(index)}
            >
              Finalize
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    })

    return items
  }

  return (
    <Layout>
      <Button
        primary
        floated="right"
        onClick={() => router.push(`/campaigns/${address}/requests/new/`)}
      >
        Add Request
      </Button>
      <Button color="red" onClick={() => router.push(`/campaigns/${address}`)}>
        Back
      </Button>
      <h3>Request List</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Recipient</Table.HeaderCell>
            <Table.HeaderCell>Approval Count</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Approve</Table.HeaderCell>
            <Table.HeaderCell>Finalize</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{renderRequests()}</Table.Body>
      </Table>
    </Layout>
  )
}

index.getInitialProps = async (props) => {
  const campaign = Campaign(props.query.address)
  const requestCount = await campaign.methods.getRequestCount().call()
  const approversCount = await campaign.methods.getApproversCount().call()
  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call()
      }),
  )
  return {
    address: props.query.address,
    requestCount: requestCount,
    approversCount: approversCount,
    requests: requests,
  }
}

export default index
