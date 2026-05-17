<script>
export default {
  onLaunch: function() {
    this.checkPrivacyAgreement()
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
  methods: {
    checkPrivacyAgreement() {
      const agreed = uni.getStorageSync('privacy_agreed')
      if (!agreed) {
        this.showPrivacyModal()
      }
    },
    showPrivacyModal() {
      uni.showModal({
        title: '隐私保护指引',
        content: '感谢您使用本商城！在使用服务前，请您仔细阅读并同意以下协议：\n\n1. 《用户协议》：了解使用规范与用户责任\n2. 《隐私政策》：了解我们如何保护您的个人信息\n\n点击"同意"即表示您已阅读并接受上述全部协议。',
        confirmText: '同意',
        cancelText: '暂不同意',
        success: (res) => {
          if (res.confirm) {
            uni.setStorageSync('privacy_agreed', true)
            uni.setStorageSync('privacy_agreed_time', new Date().toLocaleString())
          } else {
            this.showPrivacyModal()
          }
        },
        fail: () => {
          this.showPrivacyModal()
        }
      })
    }
  }
}
</script>

<style>
@import url('./common/common.css');
</style>