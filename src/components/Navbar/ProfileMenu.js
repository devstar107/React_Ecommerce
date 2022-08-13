import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { Avatar, Button } from '@chakra-ui/react';

const ProfileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        aria-label="Profile"
      >
        <Avatar
          size={'sm'}
          src=''
          alt="user"
        />
      </MenuButton>
      <MenuList>
        <MenuItem>User profile</MenuItem>
        <MenuItem>Reset password</MenuItem>
        <MenuDivider />
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
