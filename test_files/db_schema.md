# Data Schema

## users
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_image   | **(blob)** | **(add default)?**
created_at      | datetime  | not null
updated_at      | datetime  | not null

## songs
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
title           | string    | not null
artist_id       | integer   | not null, indexed, foreign key
album_id        | integer   | not null, indexed, foreign key
year            | string    | not null
genre           | string    | not null
mp3_url         | string    | not null
created_at      | datetime  | not null
updated_at      | datetime  | not null

## bops **(saved songs? association?)**
column name     | data type | details
:---------------|:---------:|-----------------------:
user_id         | integer   | not null, indexed, **(primary key?)**
song_id         | integer   | not null, indexed, **(primary key?)**
created_at      | datetime  | not null
updated_at      | datetime  | not null

## playlists
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
title           | string    | not null, indexed, unique
creator_id      | integer   | not null, indexed, foreign key
image_url       | **(blob?)** |
created_at      | datetime  | not null
updated_at      | datetime  | not null

## albums
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_image   | **(blob)** | **(add default)?**
created_at      | datetime  | not null
updated_at      | datetime  | not null

## artists
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_image   | **(blob)** | **(add default)?**
created_at      | datetime  | not null
updated_at      | datetime  | not null

## genres
column name     | data type | details
:---------------|:---------:|-----------------------:
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_image   | **(blob)** | **(add default)?**
created_at      | datetime  | not null
updated_at      | datetime  | not null
