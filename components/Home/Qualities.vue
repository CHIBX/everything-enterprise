<script setup lang="ts">
import designer from '/designer.svg';
import quality from '/quality.svg';
import quick_response from '/quick_response.svg';
</script>

<template>
    <div class="qualities">
    <div class="sub-qualities">
      <img :src="designer" alt="Creative Designers" draggable="false" />
      <p><strong>Creative Designers</strong></p>
    </div>
    <div class="sub-qualities">
      <img :src="quality" alt="Quality Products" draggable="false" />
      <p><strong>Quality Products</strong></p>
    </div>
    <div class="sub-qualities">
      <img :src="quick_response" alt="Quick Response" draggable="false" />
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
  background-color: rgba(99, 99, 99, 0.05);
}

.qualities .sub-qualities {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qualities img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  user-select: none;
}

@media (max-width: 500px) {
   .qualities{
      flex-wrap: wrap;
      row-gap: 15px;
   }
   .sub-qualities{
       flex-basis: 50%;
   }
   .sub-qualities:nth-child(2) {
       order: -1;
       flex-basis: 100%;
   }

}
</style>