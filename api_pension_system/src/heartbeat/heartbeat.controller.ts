import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Heartbeat')
@Controller('heartbeat')
export class HeartbeatController {
  @Get()
  @ApiOperation({ summary: 'Check if app is online' })
  checkHeartbeat() {
    return { status: 'online' };
  }
}
