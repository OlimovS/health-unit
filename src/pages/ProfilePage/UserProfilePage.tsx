import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const profileInfo = {
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  name: {
    firstName: "Alisher",
    latName: "Abdullayev",
  },
};

export default function UserProfilePage() {
  return (
    <div>
      <Flex justify={"center"}>
        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          // alt={"Author"}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            John Doe
          </Heading>
        </Stack>
      </Box>
      <div className="m-auto" style={{ width: 400 }}>
        <Tabs>
          <TabList>
            <Tab>A'zo postlar</Tab>
            <Tab>Ilmiy ishlar</Tab>
            <Tab>Sozlamalar</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>A'zo postlar sozlamalari</p>
            </TabPanel>
            <TabPanel>
              <p>Ilmiy ishlar</p>
            </TabPanel>
            <TabPanel>
              <p>Umumiy sozlamalar</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
