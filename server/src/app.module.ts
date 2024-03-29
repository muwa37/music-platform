import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin1337@cluster0.er7onvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    TrackModule,
    AlbumModule,
  ],
})
export class AppModule {}
