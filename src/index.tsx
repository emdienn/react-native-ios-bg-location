import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-ios-bg-location' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const IosBgLocation = NativeModules.IosBgLocation
  ? NativeModules.IosBgLocation
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const MySwiftThingy = NativeModules.MySwiftThingy
  ? NativeModules.MySwiftThingy
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
  )

const TestShare = NativeModules.TestShare
  ? NativeModules.TestShare
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )

export function multiply(a: number, b: number): Promise<number> {
  return IosBgLocation.multiply(a, b);
}

export function callbackMethod(callback: (err: any, response: any) => void) {
  return MySwiftThingy.callbackMethod(callback)
}

export function simpleMethod(message: string) {
  return MySwiftThingy.simpleMethod(message)
}

export function share(options: { message: string }): void {
  return TestShare.open(options)
}
