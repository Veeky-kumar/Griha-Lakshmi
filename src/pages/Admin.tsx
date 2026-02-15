import { useState, useEffect } from "react";
import { useAdmin } from "@/context/AdminContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Save, Plus, Trash2, LogOut, Image, Link as LinkIcon, 
  FileText, CreditCard, Lock, HelpCircle, X, 
  Youtube, ExternalLink, Home
} from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  const { settings, updateSettings, loading, isAuthenticated, login, logout } = useAdmin();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState(settings);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showForgotPass, setShowForgotPass] = useState(false);

  useEffect(() => {
    if (!loading) {
      setFormData(settings);
    }
  }, [loading, settings]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setPassword("");
      toast.success("Welcome back, Admin!");
    } else {
      toast.error("Incorrect password!");
    }
  };

  const handleLogout = () => {
    logout();
    setPassword("");
    toast.success("Logged out successfully");
  };

  const handleSave = async () => {
    try {
      await updateSettings(formData);
      toast.success("Settings updated successfully!");
    } catch (error) {
      toast.error("Failed to update settings.");
    }
  };

  const addGalleryItem = () => {
    setFormData({
      ...formData,
      gallery: [...formData.gallery, { src: "", title: "" }]
    });
  };

  const removeGalleryItem = (index: number) => {
    const newGallery = formData.gallery.filter((_, i) => i !== index);
    setFormData({ ...formData, gallery: newGallery });
  };

  const updateGalleryItem = (index: number, field: "src" | "title", value: string) => {
    const newGallery = [...formData.gallery];
    newGallery[index] = { ...newGallery[index], [field]: value };
    setFormData({ ...formData, gallery: newGallery });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background">Loading Admin...</div>;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-8 rounded-2xl border border-primary/20 bg-card shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 flex gap-2">
            <button 
              onClick={() => navigate("/")}
              className="p-2 rounded-full hover:bg-primary/10 text-primary transition-all"
              title="Go to Home Page"
            >
              <Home className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowInstructions(true)}
              className="p-2 rounded-full hover:bg-primary/10 text-primary transition-all"
              title="Help & Instructions"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>

          <h1 className="font-hindi text-3xl text-primary text-center mb-8 gold-glow">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 opacity-70">Enter Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-primary/20"
            >
              Access Dashboard
            </button>
            <div className="text-center">
              <button 
                type="button"
                onClick={() => setShowForgotPass(true)}
                className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </motion.div>

        {/* Forgot Password Modal */}
        <AnimatePresence>
          {showForgotPass && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/40">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-card border border-border p-8 rounded-2xl max-w-md w-full relative"
              >
                <button 
                  onClick={() => setShowForgotPass(false)}
                  className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
                <Lock className="w-12 h-12 text-primary mb-6 mx-auto" />
                <h2 className="text-2xl font-hindi text-center mb-4">Password Recovery</h2>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>For security, password resets are handled via direct database intervention.</p>
                  <p className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <strong>Step 1:</strong> Contact your system administrator or the developer.
                    <br />
                    <strong>Step 2:</strong> Provide your Firebase Project ID.
                    <br />
                    <strong>Step 3:</strong> They will manually reset the <code>adminPassword</code> field in the Firestore collection.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Instructions Modal */}
        <AnimatePresence>
          {showInstructions && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/40">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-card border border-border p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar relative"
              >
                <button 
                  onClick={() => setShowInstructions(false)}
                  className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <h2 className="text-3xl font-hindi text-primary mb-8 underline decoration-primary/30 underline-offset-8">Admin Instructions</h2>
                
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
                      <Image className="w-6 h-6 text-primary" /> Image Hosting with PostImages.org
                    </h3>
                    <div className="space-y-3 text-xs leading-relaxed opacity-70">
                      <p>
                        We recommend using <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-semibold">PostImages.org</a> for free image hosting. Follow these steps:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 ml-2">
                        <li>
                          Visit <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">https://postimages.org/</a> in your browser
                        </li>
                        <li>Click on "Choose images" or drag and drop your photo files</li>
                        <li>Wait for the upload to complete</li>
                        <li>Once uploaded, you'll see multiple link options. Look for the <strong>"Direct Link"</strong> option</li>
                        <li>Copy the Direct Link (it will typically end with .jpg, .png, or another image extension)</li>
                        <li>Paste this Direct Link into the <strong>Photo URL</strong> field in the Gallery Photos section</li>
                        <li>Add a title for your image in the <strong>Title</strong> field</li>
                      </ol>
                      <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 mt-4">
                        <p className="font-semibold mb-2">💡 Tips:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Free accounts support images up to 32MB</li>
                          <li>Direct links work best for embedding in galleries</li>
                          <li>You can upload multiple images at once</li>
                          <li>Images are hosted permanently (unless you choose expiration)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
                      <Youtube className="w-6 h-6 text-red-500" /> Video Embedding
                    </h3>
                    <p className="text-xs leading-relaxed opacity-70">
                      Use the <strong>Embed Link</strong> from YouTube. Go to Share → Embed and copy the address in the <code>src="..."</code> attribute (e.g., https://www.youtube.com/embed/XXXXXX).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="font-hindi text-4xl text-primary mb-2">Admin Dashboard</h1>
            <p className="opacity-60 font-serif">Manage Griha Lakshmi site content</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all active:scale-95"
            >
              <Save className="w-5 h-5" /> Save Changes
            </button>
            <button
              onClick={handleLogout}
              className="p-3 rounded-full border border-border hover:bg-red-500/10 hover:border-red-500/50 transition-all text-red-500"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* General & Security Settings */}
          <section className="space-y-8">
            {/* Site Info */}
            <div className="p-8 rounded-3xl border border-border bg-card/30 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 font-hindi text-2xl mb-6 text-primary">
                <FileText className="w-6 h-6" /> Site Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70 flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-500" /> YouTube Embed Link
                  </label>
                  <input
                    type="text"
                    value={formData.youtubeUrl}
                    onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" /> Gallery Price Text
                  </label>
                  <input
                    type="text"
                    value={formData.bookingPrice}
                    onChange={(e) => setFormData({ ...formData, bookingPrice: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="p-8 rounded-3xl border border-border bg-card/30 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 font-hindi text-2xl mb-6 text-primary">
                <Lock className="w-6 h-6" /> Security & Access
              </h2>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Update Admin Password</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.adminPassword}
                    onChange={(e) => setFormData({ ...formData, adminPassword: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all font-mono"
                  />
                </div>
                <p className="mt-3 text-[10px] text-muted-foreground italic">Changing this will update the password for future logins.</p>
              </div>
            </div>
          </section>

          {/* Photo Gallery */}
          <section className="space-y-8">
             <div className="p-8 rounded-3xl border border-border bg-card/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="flex items-center gap-2 font-hindi text-2xl text-primary">
                    <Image className="w-6 h-6" /> Gallery Photos
                  </h2>
                  <button onClick={addGalleryItem} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all flex items-center gap-1 pr-3">
                    <Plus className="w-5 h-5" /> <span className="text-xs font-bold">Add New</span>
                  </button>
                </div>
                
                <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {formData.gallery.map((item, index) => (
                    <motion.div
                      layout
                      key={index}
                      className="p-5 rounded-2xl border border-border bg-background/50 flex flex-col gap-3 group"
                    >
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => updateGalleryItem(index, "title", e.target.value)}
                          className="bg-transparent border-none focus:ring-0 font-bold p-0 text-lg flex-1"
                        />
                         <button onClick={() => removeGalleryItem(index)} className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={item.src}
                        onChange={(e) => updateGalleryItem(index, "src", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-background border border-border text-xs font-mono"
                      />
                    </motion.div>
                  ))}
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
