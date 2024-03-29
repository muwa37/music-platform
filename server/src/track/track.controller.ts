import { Controller, Post } from '@nestjs/common';

@Controller('/tracks')
export class TrackController {
  @Post()
  create() {}

  getAll() {}

  getOne() {}

  delete() {}
}
