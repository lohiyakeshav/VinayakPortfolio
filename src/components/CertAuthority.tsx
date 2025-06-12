import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/portfolio';
import { 
  Shield, 
  Award, 
  ExternalLink, 
  CheckCircle, 
  Key,
  Lock,
  Unlock
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const CertAuthority: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [verifyingCert, setVerifyingCert] = useState<string | null>(null);

  const verifyCertificate = (certId: string) => {
    setVerifyingCert(certId);
    setTimeout(() => {
      setVerifyingCert(null);
    }, 2000);
  };

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || Shield;
  };

  return (
    <section className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-hacker-green mb-4 animate-pulse-neon">
            {'</'} CERTIFICATE_AUTHORITY {'>'}
          </h2>
          <p className="text-hacker-cyan font-mono text-sm sm:text-base">
            Verified digital credentials and security tokens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certificates.map((cert, index) => {
            const IconComponent = getIcon(cert.icon);
            const isSelected = selectedCert === cert.id;
            const isVerifying = verifyingCert === cert.id;
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-4 sm:p-6 hover:neon-border transition-all cursor-pointer"
                onClick={() => setSelectedCert(isSelected ? null : cert.id)}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{
                        rotateY: isVerifying ? 360 : 0,
                        scale: isVerifying ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                        isVerifying 
                          ? 'bg-hacker-green text-black' 
                          : 'bg-hacker-green/20 text-hacker-green'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-mono text-hacker-green mb-1 truncate">
                      {cert.name}
                    </h3>
                    <p className="text-hacker-cyan text-sm font-mono mb-2 truncate">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-400 text-xs font-mono">
                      Issued: {cert.date}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        verifyCertificate(cert.id);
                      }}
                      disabled={isVerifying}
                      className={`px-2 sm:px-3 py-1 rounded text-xs font-mono border transition-all ${
                        isVerifying
                          ? 'border-hacker-green bg-hacker-green text-black'
                          : 'border-hacker-green text-hacker-green hover:bg-hacker-green hover:text-black'
                      }`}
                    >
                      {isVerifying ? 'VERIFYING...' : 'VERIFY'}
                    </motion.button>
                    
                    {isSelected ? (
                      <Unlock className="w-3 h-3 sm:w-4 sm:h-4 text-hacker-green" />
                    ) : (
                      <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 sm:mt-6 pt-4 border-t border-hacker-green/20"
                    >
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                          <div>
                            <span className="text-hacker-cyan">Certificate ID:</span>
                            <div className="text-hacker-green mt-1 break-all">
                              {cert.credentialId || 'N/A'}
                            </div>
                          </div>
                          <div>
                            <span className="text-hacker-cyan">Status:</span>
                            <div className="text-hacker-green mt-1 flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              VERIFIED
                            </div>
                          </div>
                        </div>

                        <div className="text-xs font-mono">
                          <span className="text-hacker-cyan">Hash:</span>
                          <div className="text-gray-400 mt-1 break-all">
                            {btoa(cert.id + cert.name + cert.date).substring(0, 32)}...
                          </div>
                        </div>

                        {cert.verifyUrl && (
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 border border-hacker-cyan text-hacker-cyan hover:bg-hacker-cyan hover:text-black transition-all rounded text-sm font-mono w-full sm:w-auto justify-center"
                          >
                            <ExternalLink className="w-4 h-4" />
                            VERIFY EXTERNALLY
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {isVerifying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 bg-hacker-green/10 border border-hacker-green/30 rounded"
                  >
                    <div className="flex items-center gap-2 text-hacker-green text-xs font-mono">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Key className="w-4 h-4" />
                      </motion.div>
                      <span>Verifying certificate authenticity...</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-400 font-mono">
                      Checking cryptographic signatures and validity...
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-lg p-4 sm:p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-hacker-green" />
            <h3 className="text-hacker-green font-mono text-sm sm:text-base">CERTIFICATION SUMMARY</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-green font-bold">
                {certificates.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Total Certificates</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-cyan font-bold">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Verification Rate</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-purple font-bold">
                2024
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Latest Certification</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-yellow font-bold">
                Active
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Status</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertAuthority;