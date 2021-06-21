import { NativeModules } from 'react-native';

type PocModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { PocModule } = NativeModules;

export default PocModule as PocModuleType;
