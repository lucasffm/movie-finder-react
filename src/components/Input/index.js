import {
  InputGroup,
  Input as ChakraInput,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

export const Input = (props) => (
  <InputGroup>
    <ChakraInput onChange={props.handleChange} {...props} />

    {props.icon && (
      <InputRightElement
        children={
          <IconButton
            variant="unstyled"
            onClick={props.handleClick}
            cursor="pointer"
            mr="2"
            mt="2"
            w="6"
            h="6"
            color="gray"
            as={props.icon}
          />
        }
      />
    )}
  </InputGroup>
);
