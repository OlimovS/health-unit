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
import KlinikaProfilePage from "./KlinikaProfilePage";
import UserProfilePage from "./UserProfilePage";

const profileInfo = {
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  name: {
    firstName: "Alisher",
    latName: "Abdullayev",
  },
};

export default function ProfilePage() {
  return <div>{false ? <UserProfilePage /> : <KlinikaProfilePage />}</div>;
}
