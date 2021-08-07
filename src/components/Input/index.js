import {
  InputGroup,
  InputLeftElement,
  Input as ChakraInput,
  InputRightElement,
} from "@chakra-ui/react";

export const Input = (props) => (
  <InputGroup>
    {props.left && (
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        fontSize="1.2em"
        children="$"
      />
    )}
    <ChakraInput {...props} variant="filled" />

    {props.right && (
      <InputRightElement children={<props.icon color="green.500" />} />
    )}
  </InputGroup>
);
