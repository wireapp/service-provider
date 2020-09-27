import Head from 'next/head'
import { useState } from 'react'
import { ContainerMD, Box, Button, Container, Columns, ColumnHeaderMenu, MenuLink, HeaderMenu, Column, HeaderSubMenu, Logo, isDesktop, COLOR } from '@wireapp/react-ui-kit'

const ColumnsStyle = {
  marginBottom: '24px',
  marginTop: '24px',
};

const ContainerStyle = {
  ...ColumnsStyle,
  alignItems: 'center',
  display: 'flex',
  height: '48px',
  justifyContent: 'center',
};

export default function Home() {
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);

  return (
    <div>
      <Head>
        <title>Wire Service Provider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <ContainerMD style={ContainerStyle}>
            <Logo width={72} color={COLOR.GRAY} style={{ marginRight: 10 }} />
            <p>Service Provider Interface</p>
          </ContainerMD>
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mattis nibh, sed maximus leo. Fusce a lacinia sem,
            vitae ornare dolor. Quisque rhoncus, magna non lacinia sagittis, erat augue fringilla metus, eu consectetur leo velit
            non lacus. Phasellus ipsum turpis, dapibus ut purus in, lobortis consectetur mi.
          </Box>
          <Button backgroundColor={COLOR.BLUE}>Button</Button>
        </Container>
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
