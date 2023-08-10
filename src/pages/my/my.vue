<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()
// 测试请求
const getData = async () => {
  const res = await http({
    method: 'GET',
    url: '',
    header: {},
  })

  console.log('请求成功', res)
}
</script>

<template>
  <view class="my">my</view>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '小兔鲜',
          token: '12345',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">
      清理用户信息
    </button>
    <button @tap="getData" size="mini" plain type="primary">测试请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
