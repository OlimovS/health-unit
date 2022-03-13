import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { REQUIRED_FIELD_MESSAGE } from "../../constants";
import { IPostReq, makePost } from "../../api/allOther";

import "./styles.css";

const PostSchema = Yup.object().shape({
  title: Yup.string().min(2, "Juda qisqa!").required(REQUIRED_FIELD_MESSAGE),
  content: Yup.string().min(2, "Juda qisqa!").required(REQUIRED_FIELD_MESSAGE),
});

export default function MakePost() {
  const toast = useToast();

  const handleMakePost = async (userInfo: IPostReq) => {
    const resp = await makePost(userInfo).catch((err) => {
      toast({
        title: "Error sodir bo'ldi",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    });

    if (resp) {
      toast({
        title: "Muvaffaqiyatli",
        description: "Post qo'shildi",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="post__make">
      <h1 className="h3 text-center mt-3">Post yaratish</h1>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        validationSchema={PostSchema}
        onSubmit={(values) => {
          handleMakePost(values);
        }}
      >
        {({ handleChange, handleBlur }) => {
          return (
            <Form>
              <Stack spacing={4}>
                <Box>
                  <FormControl id="title" isRequired>
                    <FormLabel>Post titleni kiriting</FormLabel>
                    <Input
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      component="div"
                      className="text-danger"
                      name="title"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="content" isRequired>
                    <FormLabel>Post contentini kiriting</FormLabel>
                    <Textarea
                      name="content"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Text kiriting"
                      size="sz"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-danger"
                      name="content"
                    />
                  </FormControl>
                </Box>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Yuborilmoqda..."
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Qo'shish
                  </Button>
                </Stack>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
