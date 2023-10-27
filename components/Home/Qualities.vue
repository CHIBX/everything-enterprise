<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <div class="qualities">
    <ClientOnly>
      <div class="sub-qualities">
        <FontAwesomeIcon :icon="['fas', 'user']" size="3x" />
        <p><strong>Creative Designers</strong></p>
      </div>
      <div class="sub-qualities">
        <FontAwesomeIcon :icon="['fas', 'award']" size="3x" />
        <p><strong>Quality Products</strong></p>
      </div>
      <div class="sub-qualities">
        <FontAwesomeIcon :icon="['fas', 'bolt-lightning']" size="3x" />
        <p><strong>Quick Response</strong></p>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
.qualities {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0 30px;
  background-color: rgba(99, 99, 99, 0.05);
}

.qualities .sub-qualities {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qualities svg {
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