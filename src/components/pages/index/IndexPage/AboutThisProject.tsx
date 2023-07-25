import { Anchor, List, Text, Title } from '@mantine/core'

export const AboutThisProject = () => {
  return (
    <div>
      <Title>{'About this project:'}</Title>
      <Text>
        {
          'This project is built using cutting-edge technologies and frameworks to facilitate rapid,'
        }
        {'functional, and beautiful development. It leverages '}
        <strong>{'TypeScript'}</strong>
        {', which adds'}
        {'robustness to the project.'}
      </Text>

      <Title>{'Design decisions:'}</Title>
      <List>
        <List.Item>
          <Text>
            <strong>{'Color palette:'}</strong>{' '}
            {'The project uses Pink and Black colors, following the'}
            {'guidance of'}{' '}
            <Anchor href="https://www.around.to">{'around.to'}</Anchor>
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Vectorial approach:'}</strong>{' '}
            {'Logos have been changed from .png to .svg for'}
            {'scalability and better resolution.'}
          </Text>
        </List.Item>
      </List>

      <Title>{'Frontend stack:'}</Title>
      <List>
        <List.Item>
          <Text>
            <strong>{'Next.JS (React + TypeScript)'}</strong>{' '}
            {'- The frontend is built using Next.JS, a'}
            {'fully typed framework.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Mantine'}</strong>{' '}
            {'- Components library used for building the UI.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Apollo'}</strong>{' '}
            {'- Used as the GraphQL Manager for data handling.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Tabler Icons'}</strong>{' '}
            {'- All icons in the project are sourced from Tabler Icons.'}
          </Text>
        </List.Item>
      </List>

      <Title>{'Features:'}</Title>
      <List>
        <List.Item>
          <Text>
            <strong>{'Fully Responsive'}</strong>{' '}
            {'- The header and footer are designed to render different'}
            {'components for mobile and desktop views.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Loading bar'}</strong>{' '}
            {'- A loading bar is displayed at the top when changing pages.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Loaders skeletons'}</strong>{' '}
            {'- Skeletons are shown when content is loading.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Vectorial favicon'}</strong>{' '}
            {'- The favicon uses vector graphics for better scaling.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Tab title'}</strong>{' '}
            {'- The title of the tab changes according to the content.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Notifications components'}</strong>{' '}
            {'- Components for informing users about events.'}
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <strong>{'Modals'}</strong>{' '}
            {'- Modal components for confirming actions.'}
          </Text>
        </List.Item>
      </List>
    </div>
  )
}
