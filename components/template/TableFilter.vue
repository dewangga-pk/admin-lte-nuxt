<template>
  <Card>
    <template #title>
      <span class="text-lg font-bold">Filter</span>
    </template> 
    <template #content>
      <DataTable 
        v-model:filters="filters"
        :value="customers" 
        paginator 
        :rows="10" 
        dataKey="id" 
        filterDisplay="row" 
        :loading="loading"
        :globalFilterFields="['name', 'country.name', 'representative.name', 'status']"
      >
        <template #header>
            <div class="flex justify-end">
                <IconField>
                    <InputIcon>
                        <i class="fas fa-search" />
                    </InputIcon>
                    <InputText v-model="filters['global'].value" placeholder="Keyword Search" class="!md:w-auto !w-48" />
                </IconField>
            </div>
        </template>
        <template #empty> No customers found. </template>
        <template #loading> Loading customers data. Please wait. </template>
        <Column field="name" header="Name" style="min-width: 12rem">
            <template #body="{ data }">
                {{ data.name }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by name" />
            </template>
        </Column>
        <Column header="Country" filterField="country.name" style="min-width: 12rem">
            <template #body="{ data }">
                <div class="flex items-center gap-2">
                    <span>{{ data.country.name }}</span>
                </div>
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by country" />
            </template>
        </Column>
        <Column header="Agent" filterField="representative" :showFilterMenu="false" style="min-width: 14rem">
            <template #body="{ data }">
                <div class="flex items-center gap-2">
                    <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                    <span>{{ data.representative.name }}</span>
                </div>
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" style="min-width: 14rem" :maxSelectedLabels="1">
                    <template #option="slotProps">
                        <div class="flex items-center gap-2">
                            <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 32px" />
                            <span>{{ slotProps.option.name }}</span>
                        </div>
                    </template>
                </MultiSelect>
            </template>
        </Column>
        <Column field="status" header="Status" :showFilterMenu="false" style="min-width: 12rem">
            <template #body="{ data }">
                <Tag :value="data.status" :severity="getSeverity(data.status)" />
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <Select v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" style="min-width: 12rem" :showClear="true">
                    <template #option="slotProps">
                        <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                    </template>
                </Select>
            </template>
        </Column>
        <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
            <template #body="{ data }">
                <i class="fas" :class="{ 'fa-check-circle text-green-500': data.verified, 'fa-times-circle text-red-400': !data.verified }"></i>
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <Checkbox v-model="filterModel.value" :indeterminate="filterModel.value === null" binary @change="filterCallback()" />
            </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup lang="ts">
import {FilterMatchMode } from '@primevue/core/api'
const customers = ref([
  {
    id: 1000,
    name: 'James Butt',
    country: { name: 'Algeria', code: 'dz' },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
    balance: 70663
  },
  {
    id: 1001,
    name: 'Josephine Darakjy',
    country: { name: 'Argentina', code: 'ar' },
    company: 'Chanay, Jeffrey A Esq',
    date: '2019-10-11',
    status: 'qualified',
    verified: false,
    activity: 83,
    representative: { name: 'Anna Fali', image: 'annafali.png' },
    balance: 43333
  },
  {
    id: 1002,
    name: 'Art Venere',
    country: { name: 'Egypt', code: 'eg' },
    company: 'Chemel, James L Cpa',
    date: '2011-12-11',
    status: 'new',
    verified: true,
    activity: 37,
    representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    balance: 124500
  },
  {
    id: 1003,
    name: 'Lenna Paprocki',
    country: { name: 'Algeria', code: 'dz' },
    company: 'Feltz Printing Service',
    date: '2013-02-19',
    status: 'negotiation',
    verified: false,
    activity: 52,
    representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    balance: 45400
  },
  {
    id: 1004,
    name: 'Donette Foller',
    country: { name: 'Australia', code: 'au' },
    company: 'Printing Dimensions',
    date: '2014-05-03',
    status: 'renewal',
    verified: true,
    activity: 12,
    representative: { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    balance: 90000
  },
  {
    id: 1005,
    name: 'Simona Morasca',
    country: { name: 'Canada', code: 'ca' },
    company: 'Chapman, Ross E Esq',
    date: '2015-07-16',
    status: 'proposal',
    verified: false,
    activity: 76,
    representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    balance: 123400
  },
  {
    id: 1006,
    name: 'Mitsue Tollner',
    country: { name: 'Brazil', code: 'br' },
    company: 'Morlong Associates',
    date: '2012-08-14',
    status: 'unqualified',
    verified: true,
    activity: 29,
    representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    balance: 65432
  },
  {
    id: 1007,
    name: 'Leota Dilliard',
    country: { name: 'France', code: 'fr' },
    company: 'Commercial Press',
    date: '2018-10-24',
    status: 'qualified',
    verified: false,
    activity: 48,
    representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
    balance: 78000
  },
  {
    id: 1008,
    name: 'Sage Wieser',
    country: { name: 'Germany', code: 'de' },
    company: 'Truhlar And Truhlar Attys',
    date: '2017-06-21',
    status: 'new',
    verified: true,
    activity: 65,
    representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    balance: 112000
  },
  {
    id: 1009,
    name: 'Kris Marrier',
    country: { name: 'Italy', code: 'it' },
    company: 'King, Christopher A Esq',
    date: '2016-01-15',
    status: 'negotiation',
    verified: false,
    activity: 34,
    representative: { name: 'XuXue Feng', image: 'xuxuefeng.png' },
    balance: 98000
  },
  {
    id: 1010,
    name: 'Minerva Hooper',
    country: { name: 'Spain', code: 'es' },
    company: 'Wilkinson, Michael L',
    date: '2013-04-11',
    status: 'renewal',
    verified: true,
    activity: 40,
    representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
    balance: 87000
  },
  {
    id: 1011,
    name: 'Olivia Liang',
    country: { name: 'Mexico', code: 'mx' },
    company: 'Feltz Printing Service',
    date: '2014-11-20',
    status: 'proposal',
    verified: false,
    activity: 23,
    representative: { name: 'Anna Fali', image: 'annafali.png' },
    balance: 64500
  },
  {
    id: 1012,
    name: 'Lorenza Johnson',
    country: { name: 'USA', code: 'us' },
    company: 'Benton, John B Jr',
    date: '2018-03-28',
    status: 'unqualified',
    verified: true,
    activity: 55,
    representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    balance: 73200
  },
  {
    id: 1013,
    name: 'Fletcher Wright',
    country: { name: 'UK', code: 'gb' },
    company: 'Chanay, Jeffrey A Esq',
    date: '2012-09-09',
    status: 'qualified',
    verified: false,
    activity: 68,
    representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    balance: 81200
  },
  {
    id: 1014,
    name: 'Abel Magwitch',
    country: { name: 'Australia', code: 'au' },
    company: 'Chemel, James L Cpa',
    date: '2011-12-05',
    status: 'new',
    verified: true,
    activity: 44,
    representative: { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    balance: 92000
  },
  {
    id: 1015,
    name: 'Melinda Knox',
    country: { name: 'New Zealand', code: 'nz' },
    company: 'Feltz Printing Service',
    date: '2016-08-30',
    status: 'negotiation',
    verified: false,
    activity: 31,
    representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    balance: 112500
  },
  {
    id: 1016,
    name: 'Randal Gray',
    country: { name: 'Canada', code: 'ca' },
    company: 'Printing Dimensions',
    date: '2019-12-02',
    status: 'renewal',
    verified: true,
    activity: 27,
    representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    balance: 98000
  },
  {
    id: 1017,
    name: 'Bertha Adams',
    country: { name: 'France', code: 'fr' },
    company: 'Chapman, Ross E Esq',
    date: '2014-07-18',
    status: 'proposal',
    verified: false,
    activity: 59,
    representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
    balance: 134500
  },
  {
    id: 1018,
    name: 'Pascale Iglesias',
    country: { name: 'Spain', code: 'es' },
    company: 'Morlong Associates',
    date: '2015-11-27',
    status: 'unqualified',
    verified: true,
    activity: 38,
    representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    balance: 99000
  },
  {
    id: 1019,
    name: 'Vincenzo Rizzo',
    country: { name: 'Italy', code: 'it' },
    company: 'Commercial Press',
    date: '2017-02-14',
    status: 'qualified',
    verified: false,
    activity: 49,
    representative: { name: 'XuXue Feng', image: 'xuxuefeng.png' },
    balance: 88000
  },
  {
    id: 1020,
    name: 'Candice Abbott',
    country: { name: 'Germany', code: 'de' },
    company: 'Truhlar And Truhlar Attys',
    date: '2013-05-19',
    status: 'new',
    verified: true,
    activity: 65,
    representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
    balance: 75000
  },
  {
    id: 1021,
    name: 'Ernesto Sullivan',
    country: { name: 'Mexico', code: 'mx' },
    company: 'King, Christopher A Esq',
    date: '2018-09-04',
    status: 'negotiation',
    verified: false,
    activity: 72,
    representative: { name: 'Anna Fali', image: 'annafali.png' },
    balance: 86000
  },
  {
    id: 1022,
    name: 'Matilda Ford',
    country: { name: 'USA', code: 'us' },
    company: 'Wilkinson, Michael L',
    date: '2014-12-15',
    status: 'renewal',
    verified: true,
    activity: 53,
    representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    balance: 91000
  },
  {
    id: 1023,
    name: 'Orlando Black',
    country: { name: 'UK', code: 'gb' },
    company: 'Feltz Printing Service',
    date: '2016-04-07',
    status: 'proposal',
    verified: false,
    activity: 39,
    representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    balance: 87000
  },
  {
    id: 1024,
    name: 'Penelope Gray',
    country: { name: 'Australia', code: 'au' },
    company: 'Benton, John B Jr',
    date: '2019-01-29',
    status: 'unqualified',
    verified: true,
    activity: 47,
    representative: { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    balance: 105000
  }
])
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(false);
const getSeverity = (status:any):any => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warn';

        case 'renewal':
            return null;
    }
}
</script>

<style scoped>

</style>