"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, Download, FileText, ImageIcon, File, Trash2, Eye, Share } from "lucide-react"

interface SharedFile {
  id: number
  name: string
  type: "pdf" | "image" | "document" | "other"
  size: string
  uploadedBy: string
  uploadedAt: string
  url: string
}

export function FileSharing() {
  const [files, setFiles] = useState<SharedFile[]>([
    {
      id: 1,
      name: "Exercices_Derivees.pdf",
      type: "pdf",
      size: "2.3 MB",
      uploadedBy: "Prof. Jean Martin",
      uploadedAt: "14:05",
      url: "#",
    },
    {
      id: 2,
      name: "Graphique_Fonction.png",
      type: "image",
      size: "856 KB",
      uploadedBy: "Marie Dubois",
      uploadedAt: "14:12",
      url: "#",
    },
    {
      id: 3,
      name: "Notes_Cours.docx",
      type: "document",
      size: "1.1 MB",
      uploadedBy: "Prof. Jean Martin",
      uploadedAt: "14:15",
      url: "#",
    },
  ])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
      case "document":
        return <FileText className="h-8 w-8 text-red-500" />
      case "image":
        return <ImageIcon className="h-8 w-8 text-blue-500" />
      default:
        return <File className="h-8 w-8 text-gray-500" />
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)

          // Add file to list
          const newFile: SharedFile = {
            id: files.length + 1,
            name: file.name,
            type: file.type.includes("image")
              ? "image"
              : file.type.includes("pdf")
                ? "pdf"
                : file.type.includes("document")
                  ? "document"
                  : "other",
            size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
            uploadedBy: "Marie Dubois", // Current user
            uploadedAt: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
            url: "#",
          }
          setFiles((prev) => [...prev, newFile])
          return 0
        }
        return prev + 10
      })
    }, 200)
  }

  const deleteFile = (id: number) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  return (
    <div className="h-full flex flex-col space-y-6">
      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Partager un fichier</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-sm text-gray-600 mb-4">Glissez-déposez vos fichiers ici ou cliquez pour sélectionner</p>
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.gif"
            />
            <Button asChild>
              <label htmlFor="file-upload" className="cursor-pointer">
                Sélectionner un fichier
              </label>
            </Button>
            <p className="text-xs text-gray-500 mt-2">Formats acceptés: PDF, DOC, DOCX, PNG, JPG, GIF (max 10MB)</p>
          </div>

          {isUploading && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Upload en cours...</span>
                <span className="text-sm">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Files List */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-lg">Fichiers partagés ({files.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {files.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  {getFileIcon(file.type)}
                  <div>
                    <h4 className="font-medium text-sm">{file.name}</h4>
                    <p className="text-xs text-gray-500">
                      {file.size} • Par {file.uploadedBy} à {file.uploadedAt}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => deleteFile(file.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            {files.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <File className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Aucun fichier partagé pour le moment</p>
                <p className="text-sm">Uploadez un fichier pour commencer</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
