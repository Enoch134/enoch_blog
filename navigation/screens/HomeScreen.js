import * as react from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function HomeScreen({ navigation }) {
  return(
      <ScrollView>
      <View style={{flex:1}}>
        < Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
       <Card.Content>
      <Title>ODC LAUNCHING</Title>
         <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Read</Button>
    </Card.Actions>

    {/* blog 2 */}
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
       <Card.Content>
      <Title>ODC LAUNCHING</Title>
         <Paragraph>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
             nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
         sunt in culpa qui officia deserunt mollit anim id est laborum.
         </Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Read</Button>
    </Card.Actions>

    {/* blog 3 */}

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
       <Card.Content>
      <Title>ODC LAUNCHING</Title>
         <Paragraph>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
         sunt in culpa qui officia deserunt mollit anim id est laborum.
         </Paragraph>
    </Card.Content>
     <Card.Actions>
      <Button>Read</Button>
     </Card.Actions>

    </Card>
      </View>
      </ScrollView>
  )
}