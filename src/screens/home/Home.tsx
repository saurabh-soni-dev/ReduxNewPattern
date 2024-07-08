import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../services/reduxToolkit/store';
import {logout} from '../../services/reduxToolkit/users/users';

const Home = () => {
  const data = useSelector((state: RootState) => state?.users?.data);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
      }}>
      <Text style={{fontSize: 16, color: 'black'}}>
        Hello,{' '}
        <Text style={{color: 'darkblue', fontWeight: '500'}}>
          Mr.{data?.name}
        </Text>
        , Welcome to your space...!
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onLogout}
        style={{
          marginTop: 30,
          backgroundColor: 'darkblue',
          height: 40,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
