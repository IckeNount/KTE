// components/RepoTag.tsx
import { Avatar, Box, Flex, Icon, Text } from '@chakra-ui/react'
import { FiTerminal } from 'react-icons/fi'

interface RepoTagProps {
  username: string
  repoName: string
  location: string
  avatarUrl: string
}

export const RepoTag: React.FC<RepoTagProps> = ({
  username,
  repoName,
  location,
  avatarUrl,
}) => {
  return (
    <Flex
      align="center"
      bgGradient="linear(to-r, #1A202C, #2D3748)"
      borderRadius="xl"
      px={4}
      py={2}
      gap={3}
      color="white"
      w="fit-content"
      boxShadow="md"
    >
      <Avatar src={avatarUrl} name={username} size="sm" />

      <Box>
        <Text fontWeight="semibold" fontSize="sm" lineHeight="1">
          {username}/{repoName}
        </Text>
        <Text fontSize="xs" color="gray.400" mt="1px">
          {location}
        </Text>
      </Box>

      <Icon as={FiTerminal} boxSize={4} ml="auto" color="blue.400" />
    </Flex>
  )
}
