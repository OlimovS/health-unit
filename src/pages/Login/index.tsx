import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  InputRightElement,
  InputGroup,
  toast,
} from "@chakra-ui/react";
import { Formik, ErrorMessage, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ILoginParams } from "../../api/types";
import { loginUser } from "../../api/user";
import { REQUIRED_FIELD_MESSAGE } from "../../constants";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Xato email kiritdingiz!")
    .required(REQUIRED_FIELD_MESSAGE),
  password: Yup.string()
    .min(6, "Passowrdingiz 6ta belgidan kam bo'lmasin!")
    .required(REQUIRED_FIELD_MESSAGE),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginUser = async (userInfo: ILoginParams) => {
    const resp = await loginUser(userInfo).catch((err) => {
      // toast({
      // });
    });
  };
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"}>
        <Box p={8}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              const userInfo = {
                password: values.password,
                email: values.email,
              };
              handleLoginUser(userInfo);
            }}
          >
            {({ handleChange, handleBlur }) => {
              return (
                <Stack spacing={4}>
                  <Form>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email manzilingiz</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        component="div"
                        className="text-danger"
                        name="email"
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Parolni kiriting</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <ErrorMessage
                        component="div"
                        className="text-danger"
                        name="password"
                      />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Link color={"blue.400"}>Parolni unutdingizmi?</Link>
                      </Stack>
                      <Button
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Kirish
                      </Button>
                    </Stack>
                  </Form>
                </Stack>
              );
            }}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}
