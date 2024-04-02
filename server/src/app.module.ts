import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { AlbumModule } from './album/album.module';
import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin1337@cluster0.er7onvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    TrackModule,
    FileModule,
    AlbumModule,
  ],
})
export class AppModule {}
