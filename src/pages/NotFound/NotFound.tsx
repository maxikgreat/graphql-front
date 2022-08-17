import { EmojiSadIcon } from '@heroicons/react/outline';

export const NotFound = () => (
  <section className="w-screen h-screen flex justify-center items-center">
    <div className="flex items-center gap-3">
      <h2 className="text-pink-900 text-3xl font-bold">Not found</h2>
      <EmojiSadIcon className="w-14" />
    </div>
  </section>
);
