import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmoji(index?: number): string {
    const emojis = this.getEmojis();
    const emojiIndex =
      typeof index !== 'undefined'
        ? index
        : Math.floor(Math.random() * emojis.length);
    return emojis[emojiIndex];
  }

  getEmojis() {
    return [
      '😊',
      '😂',
      '😍',
      '🚀',
      '❤️',
      '💝',
      '🌟',
      '✨',
      '💫',
      '☔',
      '🌧',
      '⛈',
      '🌩',
      '🌈',
      '🎃',
      '🍷',
      '🍸',
      '🥂',
      '🎯',
      '🎰',
      '🎲',
      '🎮',
      '📱',
      '💻',
      '💡',
      '🔥',
      '🌋',
      '⚡',
      '⚽',
      '⚾',
      '🏈',
      '🎭',
      '🎨',
      '🎵',
      '🎸',
      '🎹',
      '🎤',
      '🎧',
      '📱',
      '💻',
      '🌐',
      '🔄',
      '♨️'
    ];
  }
}
