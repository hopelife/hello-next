import React from "react";
import Apollo from "../lib/apollo"
import { Query } from "react-apollo";
// import { USER_DETAILS } from "./queries";
// import { useQuery } from "react-apollo-hooks";
import Layout from '../components/MyLayout.js'

const User = ({ url: { query: { userId } } }) => {
  console.log(userId)
  return (
    <Layout>
      <div>User</div>
    </Layout>
  );
};


// export default withData(props => (
//   <Main>
//     <Header />
//     <Submit />
//     <PostList />
//   </Main>
// ))

// const User = ({
//   match: {
//     params: { userId }
//   }
// }) => {
//   // const { loading, error, data } = useQuery(USER_DETAILS, {
//   //   variables: { userId }
//   // });
//   // if (loading)
//   //   return ("loading!!");
//   // if (error) return "error";
//   // return (
//   //   <Layout>
//   //     <Title>{data.user.name}</Title>
//   //     <Paragraph bold>nick: {data.user.nick}</Paragraph>
//   //     <Paragraph>{data.user.level}</Paragraph>
//   //   </Layout>
//   // );

//   return (
//     <Layout>
//       <Title>data.user.name</Title>
//       <Paragraph bold>nick: data.user.nick</Paragraph>
//       <Paragraph>data.user.level</Paragraph>
//     </Layout>
//   );
// };

export default User;
