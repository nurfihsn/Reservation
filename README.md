### Hotel Reservation REST API

---

#### Endpoint API

| Method | Endpoint                | Deskripsi                  |
| ------ | ----------------------- | -------------------------- |
| GET    | `/api/reservations`     | Mengambil semua reservasi  |
| GET    | `/api/reservations/:id` | Mengambil detail reservasi |
| POST   | `/api/reservations`     | Membuat reservasi baru     |
| DELETE | `/api/reservations/:id` | Menghapus reservasi        |

---

#### POST /api/reservations

```json
{
  "guestName": "Budi Santoso",
  "roomNumber": 203,
  "checkInDate": "2026-04-10",
  "checkOutDate": "2026-04-12"
}
```

---

#### Response

```json
{
  "status": "success",
  "data": {
    "id": "uuid",
    "guestName": "Budi Santoso",
    "roomNumber": 203,
    "checkInDate": "2026-04-10",
    "checkOutDate": "2026-04-12"
  }
}
```

---