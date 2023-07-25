import { Anchor, Box, List, Text, ThemeIcon, Title } from '@mantine/core'
import { Check } from 'tabler-icons-react'

export const AboutThisProject = () => {
  return (
    <Box m="xl">
      <Box my={40}>
        <Title order={2} mb="xs">
          {'About this project:'}
        </Title>
        <List
          withPadding
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon size={24} radius="xl">
              <Check size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text>
              {
                'This project is built using cutting-edge technologies and frameworks to facilitate rapid, functional, and beautiful development. Fully coded in '
              }
              <strong>{'TypeScript'}</strong>
              {', which adds robustness to the project.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Custom ESLint Configuration for TSX:'}</strong>
              {
                ' The project utilizes a custom ESLint configuration to enhance the syntax of TSX files, ensuring code quality and consistency.'
              }
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Special Prettier Formatting:'}</strong>
              {
                ' Prettier is configured with specific rules to maintain a uniform and visually appealing code format across the entire project.'
              }
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'VSCode Auto-Indentation Setting:'}</strong>
              {
                ' The project includes a VSCode setting that automatically indents the code upon saving, helping developers adhere to the formatting standards effortlessly.'
              }
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'GraphQL Subscriptions'}</strong>
              {
                ': The project utilizes GraphQL subscriptions to enable real-time updates for components such as Items and Reviews. When any user makes changes to an Item or leaves a review, all other active sessions on the same page will instantly receive the updated data without requiring a manual refresh. This feature greatly enhances the user experience by keeping the content up-to-date and providing a seamless collaborative experience across multiple users.'
              }
            </Text>
          </List.Item>
        </List>
      </Box>

      <Box my={40}>
        <Title order={2} mb="xs">
          {'Design decisions:'}
        </Title>
        <List
          withPadding
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon size={24} radius="xl">
              <Check size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text>
              <strong>{'Color palette'}</strong>
              {
                ': The project uses Pink and Black colors, following the guidance of '
              }
              <Anchor href="https://www.around.to">{'around.to'}</Anchor>
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Vectorial approach'}</strong>
              {': Logos have been changed from .png to .svg for'}
              {' scalability and better resolution.'}
            </Text>
          </List.Item>
        </List>
      </Box>

      <Box my={40}>
        <Title order={2} mb="xs">
          {'Tech stack:'}
        </Title>
        <List
          withPadding
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon size={24} radius="xl">
              <Check size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text>
              <strong>{'Next.JS (React + TypeScript)'}</strong>
              {' - The frontend is built using Next.JS, a'}
              {' fully typed framework.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Mantine'}</strong>
              {': Components library used for building the UI.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Apollo'}</strong>
              {': Used as the GraphQL Manager for data handling.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Tabler Icons'}</strong>
              {': All icons in the project are sourced from Tabler Icons.'}
            </Text>
          </List.Item>
        </List>
      </Box>

      <Box my={40}>
        <Title order={2} mb="xs">
          {'UI/UX Features:'}
        </Title>
        <List
          withPadding
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon size={24} radius="xl">
              <Check size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text>
              <strong>{'Fully Responsive'}</strong>
              {
                ': The app is designed to be fully responsive, adapting seamlessly to various devices. For instance, the header and footer components are tailored differently for mobile and desktop views, ensuring an optimal user experience across all platforms."'
              }
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Loading bar'}</strong>
              {': A loading bar is displayed at the top when changing pages.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Loaders skeletons'}</strong>
              {': Skeletons are shown when content is loading.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Loaders in Buttons'}</strong>
              {
                ': When a backend action is invoked, such as saving or submitting data, the corresponding button will display a loader to indicate that it is waiting for a response. '
              }
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Vectorial favicon'}</strong>
              {': The favicon uses vector graphics for better scaling.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Tab title'}</strong>
              {': The title of the tab changes according to the content.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Notifications components'}</strong>
              {': Components for informing users about events.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Modals'}</strong>
              {': Modal components for confirming actions.'}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>{'Frontend form prevalidation'}</strong>
              {
                ': Forms on the frontend are prevalidated to improve user experience and reduce server requests.'
              }
            </Text>
          </List.Item>
        </List>
      </Box>
    </Box>
  )
}
