package com.gamerfly

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {
    private lateinit var storiesRecyclerView: RecyclerView
    private lateinit var feedRecyclerView: RecyclerView
    private lateinit var bottomNav: BottomNavigationView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setupViews()
        setupBottomNavigation()
        loadStories()
        loadFeed()
    }

    private fun setupViews() {
        storiesRecyclerView = findViewById(R.id.storiesRecyclerView)
        feedRecyclerView = findViewById(R.id.feedRecyclerView)
        bottomNav = findViewById(R.id.bottomNav)

        storiesRecyclerView.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        feedRecyclerView.layoutManager = LinearLayoutManager(this)
    }

    private fun setupBottomNavigation() {
        bottomNav.setOnItemSelectedListener { menuItem ->
            when (menuItem.itemId) {
                R.id.nav_home -> {
                    // Ya estamos en home
                    true
                }
                R.id.nav_discover -> {
                    // Iniciar DiscoverActivity
                    true
                }
                R.id.nav_upload -> {
                    // Iniciar UploadActivity
                    true
                }
                R.id.nav_chat -> {
                    // Iniciar ChatActivity
                    true
                }
                R.id.nav_live -> {
                    // Iniciar LiveActivity
                    true
                }
                else -> false
            }
        }
    }

    private fun loadStories() {
        // TODO: Implementar carga de historias desde API
        // storiesRecyclerView.adapter = StoriesAdapter(stories)
    }

    private fun loadFeed() {
        // TODO: Implementar carga del feed desde API
        // feedRecyclerView.adapter = FeedAdapter(posts)
    }
}
