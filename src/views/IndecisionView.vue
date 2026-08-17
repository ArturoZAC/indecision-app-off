<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox @send-message="onMessage($event)" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/chat/ChatMessages.vue'
import MessageBox from '@/chat/MessageBox.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref } from 'vue'

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola Mundo',
    isMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'Si',
    isMine: false,
    image: 'https://yesno.wtf/assets/no/8-5e08abbe5aacd2cf531948145b787e9a.gif',
  },
])

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    isMine: true,
    message: text,
  })
}
</script>
