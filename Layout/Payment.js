import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import UnderLine from '../components/UnderLine';

const Payment = ({ navigation, route }) => {
  const { total } = route.params;

  const retrieveData = async () => {
    try {
      const User = await AsyncS
    } catch (error) {
      console.log(error);
    }
  }

  const formatPrice = (price) => {
    // Sử dụng phương thức toLocaleString để định dạng giá theo định dạng tiền tệ của Việt Nam (VND)
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{ width: 20, height: 20 }}
            source={require('../Image/back.png')} />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Thanh toán</Text>
        <View />
      </View>

      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <UnderLine value={'Thông tin khách hàng'} color={'black'} />
        <TextInput placeholder='Nhập họ tên' style={styles.input} />

        <TextInput placeholder='Nhập email' style={styles.input} />
        <TextInput placeholder='Nhập địa chỉ' style={styles.input} />
        <TextInput placeholder='Nhập số điện thoại' style={styles.input} />
        <UnderLine value={'Phương thức thanh toán'} color={'black'} />

        <Text style={styles.textBold}>{formatPrice(total)}</Text>
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },
  textBold: {
    fontSize: 15,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
})