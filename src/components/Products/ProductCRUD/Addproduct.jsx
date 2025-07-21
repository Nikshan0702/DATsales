import React from 'react'

export default function Addproduct() {
  return (
    <div>
         <div className={`transition-all duration-500 ease-in-out ${activeTab === 'product' ? 'block opacity-100' : 'hidden opacity-0'}`}>
                <form onSubmit={handleProductSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-amber-100/90 text-sm font-medium mb-2">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleProductChange}
                        className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-lg text-white placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all"
                        placeholder="Enter product name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-amber-100/90 text-sm font-medium mb-2">
                        Product Code
                      </label>
                      <input
                        type="text"
                        name="code"
                        value={productData.code}
                        onChange={handleProductChange}
                        className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-lg text-white placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all"
                        placeholder="Enter product code"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-amber-100/90 text-sm font-medium mb-2">
                      Product Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProductImageChange}
                      className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-lg text-white placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all"
                      required
                    />
                    {productImagePreview && (
                      <div className="mt-2">
                        <img 
                          src={productImagePreview} 
                          alt="Preview" 
                          className="h-32 object-cover rounded-lg border border-white/30"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-amber-100/90 text-sm font-medium mb-2">
                      Available Colors
                    </label>
                    <div className="space-y-3">
                      {productData.colors.map((color, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <input
                            type="color"
                            value={color || '#ffffff'}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                            className="h-10 w-10 cursor-pointer rounded border border-white/30"
                          />
                          <input
                            type="text"
                            value={color}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                            placeholder="Color name"
                            className="flex-1 px-4 py-2 bg-white/15 border border-white/30 rounded-lg text-white placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all"
                            required
                          />
                          {productData.colors.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeColor(index)}
                              className="text-amber-300 hover:text-amber-200"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addColor}
                        className="flex items-center gap-1 text-sm text-amber-300 hover:text-amber-200 mt-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Add Another Color
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-amber-100/90 text-sm font-medium mb-2">
                      Available Sizes
                    </label>
                    <div className="space-y-4">
                      {productData.sizes.map((sizeData, index) => (
                        <div key={index} className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="block text-xs text-amber-100/70 mb-1">Size</label>
                            <input
                              type="text"
                              value={sizeData.size}
                              onChange={(e) => handleSizeChange(index, 'size', e.target.value)}
                              className="w-full px-4 py-2 bg-white/15 border border-white/30 rounded-lg text-white placeholder-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all"
                              placeholder="e.g., Small"
                              required
                            />
                          </div>
                          {productData.sizes.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSize(index)}
                              className="text-sm text-amber-300 hover:text-amber-200 text-right flex items-center justify-end gap-1"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Remove Size
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addSize}
                        className="flex items-center gap-1 text-sm text-amber-300 hover:text-amber-200 mt-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Add Another Size
                      </button>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 mt-6 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:from-amber-600 hover:to-amber-700 hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? 'Creating...' : 'Add Product'}
                  </button>
                </form>
              </div>
    </div>
  )
}
