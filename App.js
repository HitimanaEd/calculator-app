import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[input,setInput]= useState('')
  const[result,setResult]= useState('')


  const onButtonPress = (value) =>{
    if(value === '='){
      try{
        setResult(eval(input));
      } catch(error){
        setResult('error')
      }

    }else if (value === 'C'){
      setInput('')
      setResult('')

    }else {
      setInput(input + value)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>

        <Text style={styles.resultText}>
          {result}
        </Text>
        
      </View>
      <View style={styles.inputContainer}>

        <TextInput 
        style={styles.inputText} 
        value={input}
        onChangeText={setInput}
        keyboardType='numeric' 
        />
        
      </View> 
      <View style={styles.buttonContainer}>
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','C','=','+'].map(
          (item,index) =>(
            <TouchableOpacity
            Key={index}
            style={styles.button}
            onPress={()=> onButtonPress(item)}
            >
              <Text style={styles.buttontext}>{item}</Text>

            </TouchableOpacity>
          )
          )}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    
  }, resultContainer: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight:10
    
  }, resultText: {
    fontSize:40

  }, inputContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    marginRight: 10

  }, inputText: {
    fontSize:30
 
  }, buttonContainer: {
    flex:2,
    flexDirection:'row',
    flexWrap:'wrap',
    marginLeft:50


  }, button: {
    fontSize:24,
    width:"25%",
    height: "20%"
    
  }, buttontext: {
    fontSize:24
  }
});
