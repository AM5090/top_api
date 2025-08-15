import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

const getMongoString = (configService: ConfigService) => {
  const login = configService.get('MONGO_LOGIN');
  const pass = configService.get('MONGO_PASSWORD');
  const host = configService.get('MONGO_HOST');
  const port = configService.get('MONGO_PORT');
  const authdb = configService.get('MONGO_AUTHDATABASE');

  return `mongodb://${login}:${pass}@${host}:${port}/${authdb}`;
};

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleFactoryOptions> => {
  return {
    uri: getMongoString(configService),
  };
};
