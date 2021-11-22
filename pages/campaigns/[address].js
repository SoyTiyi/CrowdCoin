import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import { Card, Form, Input, Grid, Button } from 'semantic-ui-react'
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContributeForm'

const address = ({
  balance,
  minimumContribution,
  requestsCount,
  appproversCount,
  address,
  campaignAddress,
}) => {

  const router = useRouter();

  const items = [
    {
      header: 'Raised money',
      meta: `${balance} wei = ${web3.utils.fromWei(balance, 'ether')} eth`,
      description: 'How much money this campaign has left to spend',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: 'Manager Address',
      meta: address,
      description: 'Address of the manager that created the campaign',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: 'Minimum Contribution Accepted',
      meta: `${minimumContribution} in (wei)`,
      description:
        'Minimum ammount of wei accepted to contribute to the campaign',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: 'Requests',
      meta: requestsCount,
      description: 'Number of request created by the manager of the campaign',
      style: { overflowWrap: 'break-word' },
    },
    {
      header: 'Contributors',
      meta: appproversCount,
      description: 'Number of Contributors helping in the campaign',
      style: { overflowWrap: 'break-word' },
    },
  ]

  return (
    <Layout>
      <Grid columns={2} divided>
        <Grid.Column width={10}>
          <h1>Campaign Details</h1>
          <br />
          <Card.Group items={items}></Card.Group>
          <br />
          <Button primary onClick={() => router.push(`/campaigns/${campaignAddress}/requests/`)}>View Requests</Button>
        </Grid.Column>
        <Grid.Column width={6}>
          <ContributeForm address={campaignAddress}/>
        </Grid.Column>
      </Grid>
    </Layout>
  )
}

address.getInitialProps = async (props) => {
  const campaign = Campaign(props.query.address)
  const summary = await campaign.methods.getSummary().call()
  return {
    balance: summary[0],
    minimumContribution: summary[1],
    requestsCount: summary[2],
    appproversCount: summary[3],
    address: summary[4],
    campaignAddress : props.query.address
  }
}

export default address
