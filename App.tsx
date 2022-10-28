import { Text }from 'react-native';
import { Button }from 'react-native';

export default function App() {
  return (
    <view style={{ ///div
      paddingInline: 40,
      paddingTop: 300,
      textAlign: 'center',
      backgroundColor: '#201d1d'
    }}>
      <text style={{  
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        panding: 30
      }}>
        Nome do Evento
        <Button style=
        {{
          justifyContent: "space-between",
          color: '#eb0808'
          // borderRadius: 10,10,20,10;
        }}

        title="Login"
        enabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
      </text>

        <br />
      
      <text style={{
        flex: 1,
        backgroundColor: 'blue'
      }}>
        Mateus
      </text>
    </view>
  )
}
