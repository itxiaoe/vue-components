<template>
    <div class="loading-3">
      <div id="center">
        <div class="skype-loader">
          <div class="dot">
            <div class="first"></div>
          </div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        提交中...
      </div>
    </div>
</template>

<script>
export default {
  name: 'loading-3'
}
</script>

<style scoped lang="less">
  @import "../../../assets/less/base";
  .loading-3{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #center {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    padding: 15px;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: @white;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    z-index: 999999;
    background-color: rgba(0,0,0,.3);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .skype-loader {
    width: 80px;
    height: 80px;
    position: relative;
  }

  .skype-loader .dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    animation: 1.7s dotrotate cubic-bezier(0.775, 0.005, 0.310, 1.000) infinite;
  }

  .skype-loader .dot:nth-child(1) {
    animation-delay: 0.2s;
  }
  .skype-loader .dot:nth-child(1):after {
    width: 7px;
    height: 7px;
  }

  .skype-loader .dot:nth-child(2) {
    animation-delay: 0.35s;
  }
  .skype-loader .dot:nth-child(2):after {
    width: 6px;
    height: 6px;
  }

  .skype-loader .dot:nth-child(3) {
    animation-delay: 0.45s;
  }
  .skype-loader .dot:nth-child(3):after {
    width: 5px;
    height: 5px;
  }

  .skype-loader .dot:nth-child(4) {
    animation-delay: 0.55s;
  }
  .skype-loader .dot:nth-child(4):after {
    width: 4px;
    height: 4px;
  }

  .skype-loader .dot:after, .skype-loader .dot .first {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    left: 50%;
    margin-left: -4px;
  }

  .skype-loader .dot .first {
    background: #fff;
    margin-top: -4px;
    animation: 1.7s dotscale cubic-bezier(0.775, 0.005, 0.310, 1.000) infinite;
    animation-delay: 0.2s;
  }

  @keyframes dotrotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes dotscale {
    0%, 10% { width: 16px; height: 16px; margin-left: -8px;  margin-top: -4px; }
    50% { width: 8px; height: 8px; margin-left: -4px; margin-top: 0; }
    90%, 100% { width: 16px; height: 16px;  margin-left: -8px;  margin-top: -4px; }
  }

</style>
