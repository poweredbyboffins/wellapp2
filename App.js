/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
*/
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import * as data from './data.json';
import * as textdata from './textdata.json';
import * as moredata from './moredata.json';

import {

 AppRegistry,

 StyleSheet,

 Text,

 ScrollView,

 View,

 Button,

 Slider

} from 'react-native';

class Main extends Component {

static navigationOptions =
 {
    title: 'Wellness Analyser',
 };


 constructor() {

     super()

     this.state = {

      firstVar: ' ',

       listvalue:data.listvalue 


     }

  }

     makeList= (item) => (

     <Button
        //onPress={this.handleClick}
        //key={item.id}
        onPress={() => {
            this.props.navigation.navigate('Second', {
              name: item.name
            });
           }}

        style={styles.list}

        title={item.name}
        color={item.id}
       />

  );
updateText = () => {
    this.state.listvalue:moredata.listvalue;
}
handleClick = () => {
     updateText();
     this.props.navigation.navigate('Second');
}


 render() {

   return (

      <View style={{margin: 50,

                    height: 500,}}>

               <Text>Lets Measure these ...</Text>

                    <ScrollView>

                       { this.state.listvalue.map(this.makeList)}

                    </ScrollView>

            </View>

   );

 }

}
class SecondActivity extends Component
{
  static navigationOptions =
  {
     title: 'SecondActivity',
  };
  constructor()
  {
  super()
  this.state=
  {
  textlist:textdata.textlist
  }
  }
  render()
  {

     const { navigation } = this.props;
     const itemId = navigation.getParam('name', 'NO-ID');
     var textdictout = this.state.textlist;
     for (i=0;i< textdictout.length;i++)
     {
       if (textdictout[i].id==itemId)
       {
          output=textdictout[i].text;
          min=textdictout[i].min;
          max=textdictout[i].max;
       }
     }
     return(
        <View style = { styles.MainContainer }>
           <Text style = { styles.TextStyle }> {output} </Text>
           <Slider
            value={this.state.value}
            onValueChange={(value) => this.setState({value})} 
            minimumValue={min}
            maximumValue={max}
            />
            <Text>Value: {this.state.value}</Text>
           <Button
             onPress={() => this.props.navigation.navigate ('First')}
             title= "Save"
           />
        </View>
     );
  }
}

export default App = StackNavigator(
{
 First: { screen: Main },
 
 Second: { screen: SecondActivity }
 
});

const styles = StyleSheet.create ({

 list: {

     margin: 15,

     padding: 5,

     height: 40,

     borderColor: 'red',

     borderWidth: 1

  },
MainContainer:
 {
    justifyContent: 'center',
    flex:1,
    margin: 10,
    alignItems:'stretch',
    backgroundColor:'beige'
  
 },
 
 TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },

})
