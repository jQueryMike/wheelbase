import { getLegalUrl } from './getLegalUrl';

describe('getLegalUrl', () => {
  it('should return the legal URL', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          id: '05281c99-56c2-4e4a-a9c0-dbf404e09648',
          name: 'Terms of Use',
          url: '/click-motors/legal/terms-of-use/',
        },
        {
          id: 'd1073593-c910-4433-9bfb-f3c8e1f9b38c',
          name: 'Privacy',
          url: '/click-motors/legal/privacy/',
        },
        {
          id: 'ebbbd80e-c801-4547-a497-6488b4b98913',
          name: 'Cookies',
          url: '/click-motors/legal/cookies/',
        },
        {
          id: '2fe8ef1f-6782-4593-a55f-0d103412361e',
          name: 'Sitemap',
          url: '/click-motors/legal/sitemap/',
        },
      ]),
    });

    const result = await getLegalUrl();
    expect(result).toBeTruthy();
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Home');
  });
});
