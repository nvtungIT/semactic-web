import { defineComponent, ref } from 'vue'
import type { Product } from '@/models'
import { getProducts } from '@/services/film'
export default defineComponent({
  async created() {
    this.products = await getProducts()
  },
  setup() {
    const products = ref([] as Product[])
    return {
      products
    }
  }
})
