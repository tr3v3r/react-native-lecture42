import {
  PermissionsAndroid,
  Platform,
} from 'react-native';

export async function askPermissionFor(permissionType, alertTitle, alertMessage) {
  if (Platform.OS === 'ios') {
    return true;
  }
  const granted = await PermissionsAndroid.request(
    permissionType,
    {
      title: alertTitle,
      message: alertMessage,
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );

  if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    const error = { message: 'Access denied!' };
    throw error;
  }

  return true;
}
