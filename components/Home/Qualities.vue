<script setup lang="ts">
</script>

<template>
  <div class="qualities">
      <div class="sub-qualities">
        <MyIcon name="uil:user" size="40" />
        <p><strong>Creative Designers</strong></p>
      </div>
      <div class="sub-qualities">
        <MyIcon name="basil:award-outline" size="40" />
        <p><strong>Quality Products</strong></p>
      </div>
      <div class="sub-qualities">
        <MyIcon name="iconamoon:lightning-1-light" size="40" />
        <p><strong>Quick Response</strong></p>
      </div>
  </div>
</template>

<style scoped>
.qualities {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0 30px;
  background-color: rgba(22, 22, 22, 0.03);
}

.qualities .sub-qualities {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qualities :deep(svg) {
  width: 50px;
  height: 50px;
  color: #8B4513;
  border-radius: 50%;
  margin-bottom: 10px;
  user-select: none;
}

@media (max-width: 500px) {
  .qualities {
    flex-wrap: wrap;
    row-gap: 15px;
  }

  .sub-qualities {
    flex-basis: 50%;
  }

  .sub-qualities:nth-child(2) {
    order: -1;
    flex-basis: 100%;
  }

}
</style>