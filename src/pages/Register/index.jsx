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
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const REQUIRED_FIELD_MESSAGE = "Bu maydonni to'ldirish majburiy";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Juda qisqa!")
    .max(50, "Juda uzun!")
    .required(REQUIRED_FIELD_MESSAGE),
  lastName: Yup.string()
    .min(2, "Juda qisqa!")
    .max(50, "Juda uzun!")
    .required(REQUIRED_FIELD_MESSAGE),
  email: Yup.string()
    .email("Xato email kiritdingiz!")
    .required(REQUIRED_FIELD_MESSAGE),
  password: Yup.string()
    .min(6, "Passowrdingiz 6ta belgidan kam bo'lmasin!")
    .required(REQUIRED_FIELD_MESSAGE),
  passwordConfirmation: Yup.string()
    .required(REQUIRED_FIELD_MESSAGE)
    .oneOf([Yup.ref("password"), null], "Tasdiqlash passwordi boshqacha!"),
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"}>
        <Box p={8}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur }) => {
              return (
                <Form>
                  <Stack spacing={4}>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>Ismingiz</FormLabel>
                        <Input
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          component="div"
                          className="text-danger"
                          name="firstName"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName" isRequired>
                        <FormLabel>Familiyangiz</FormLabel>
                        <Input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          component="div"
                          className="text-danger"
                          name="lastName"
                        />
                      </FormControl>
                    </Box>
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
                      <FormLabel>Accountingiz uchun parol qo'ying</FormLabel>
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
                    <FormControl id="passwordConfirmation" isRequired>
                      <FormLabel>Passwordni qayta kiriting</FormLabel>
                      <InputGroup>
                        <Input
                          type={showConfirmationPassword ? "text" : "password"}
                          name="passwordConfirmation"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowConfirmationPassword(
                                (showConfirmationPassword) =>
                                  !showConfirmationPassword
                              )
                            }
                          >
                            {showConfirmationPassword ? (
                              <ViewIcon />
                            ) : (
                              <ViewOffIcon />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <ErrorMessage
                        component="div"
                        className="text-danger"
                        name="passwordConfirmation"
                      />
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Yuborilmoqda..."
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Ro'yxatdan o'tish
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        Accountiz bormi?{" "}
                        <Link
                          color={"blue.400"}
                          style={{
                            marginLeft: 20,
                            textDecoration: "underline",
                          }}
                        >
                          Kirish
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}
