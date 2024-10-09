import React from 'react';
import Header from './header';

function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header /> {/* Site header */}
        
        <main className="flex-grow container mx-auto px-4 py-8"> {/* Main content */}
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center px-4">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

export default Layout;