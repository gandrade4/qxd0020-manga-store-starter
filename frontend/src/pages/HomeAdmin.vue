<template>
<a class="btn btn-success"><i class="bi bi-plus"></i>Add</a>
      
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <table class="table table-striped">
    <thead>
      <tr>
      <th>#</th>
      <th>Title</th>
      <th>Cover</th>
      <th>Number</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="manga in mangas" :key="manga.id">
        <td><a :id="`${manga.number}`">{{ manga.number }}</a></td>
        <td>{{ manga.title }}</td>
        <td><img :src="getUploadURL(manga.cover.url)" class="img-thumbnail rounded-3 w-25" alt="..."/></td>
        <td>{{ manga.number }}</td>
        <td>{{ manga.price }}</td>
        <td>
          <a class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#confirmationModal"><i class="bi bi-trash"></i></a> 
          <a class="btn btn-sm btn-primary"><i class="bi bi-pencil"></i></a></td>
      </tr>
    </tbody>
  </table>
</div>
</template>